declare module '*.ttf';
declare module '@env' {
  export const API_KEY: string;
}
declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }