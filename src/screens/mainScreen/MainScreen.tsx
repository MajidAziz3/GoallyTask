import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, TextInput} from 'react-native';
import Header from '../../components/header/Header';
import RoutineCard from '../../components/cards/RoutinesCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, sortArray} from '../../redux/slice/apiSlice';
import SearchCard from '../../components/cards/SearchCard';
import ListCard from '../../components/cards/ListCard';

interface StateType {
  counter: {
    data: [];
    isError: boolean;
    nextPage: number;
    isLoader: boolean;
  };
}

const MainScreen = () => {
  const [morningRoutine, setMorningRoutine] = useState(true);
  const [nightRoutine, setNightRoutine] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const state: any = useSelector<StateType>(state => state.counter);
  console.log(state.nextPage);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchData({page: 1}));
  }, []);
  const onChange = (text: string) => {
    setSearch(text);
  };
  const sortData = () => {
    let arr = state.data;
    let sortedArray = arr
      .slice()
      .sort((a: {createdAt: string}, b: {createdAt: string}) => {
        let date1: number = new Date(a.createdAt).getTime();
        let date2: number = new Date(b.createdAt).getTime();
        return date1 - date2;
      });
    dispatch(sortArray(sortedArray));
  };
  const handleOnEndReached = () => {
    if (!state.isLoader) {
      dispatch(fetchData({page: state.nextPage}));
    }
  };
  const headerComponent = () => {
    return (
<View style={{flex:1}}>
        <RoutineCard
        nightRoutine={nightRoutine}
        nightToggle={() => setNightRoutine(!nightRoutine)}
        morningRoutine={morningRoutine}
        onToggleMorning={() =>
          setMorningRoutine(!morningRoutine)
        }></RoutineCard>
        <SearchCard
          onPressSearch={() => searchFilterFunction()}
          onPress={() => sortData()}>
          <TextInput
            style={{marginLeft: 10, marginTop: 15}}
            onChangeText={(text): void => setSearch(text)}
            value={search}
            maxLength={150}
            numberOfLines={1}
            placeholder="Search"
          />
        </SearchCard>
        </View>
    );
  };

  const searchFilterFunction = () => {
    if (search) {
      const newData = state.data.filter(function (item: any) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
      setSearch(search);
    } else {
      setFilteredDataSource([]);
      setSearch(search);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Header />


      {state.isLoader && state.nextPage == 1 ? (
        <ActivityIndicator size={'large'} />
      ) : filteredDataSource.length > 0 ? (
        <FlatList
          nestedScrollEnabled
          data={filteredDataSource}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          renderItem={(item:any) => {
            return (
              <ListCard
                schedule={Object.values(item.item.schedule)[0]}
                image={item.item.visualAidUrl}
                name={item.item.name}
              />
            );
          }}
        />
      ) : (
        <FlatList
          ListHeaderComponent={headerComponent()}
          ItemSeparatorComponent={() => <View />}
          extraData={[]}
          initialNumToRender={20}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          data={state.data}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <ListCard
                schedule={Object.values(item.schedule)[0]}
                image={item.visualAidUrl}
                name={item.name}
              />
            );
          }}
          onEndReachedThreshold={0}
          onEndReached={handleOnEndReached}
          refreshing={refreshing}
          onRefresh={() => handleOnEndReached}
          ListFooterComponent={() => (
            <View>
              {state.isLoader && <ActivityIndicator size={'large'} />}
            </View>
          )}
        />
      )}
    </View>
  );
};
export default MainScreen;
