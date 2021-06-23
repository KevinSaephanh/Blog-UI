import IParagraph from "./IParagraph";
import IPicture from "./IPicture";

export default interface ISection {
  title?: string;
  picture?: IPicture;
  body: IParagraph[];
}
