import { ReactComponent as CenterY } from "../../images/centerYellow.svg";
import { ReactComponent as CenterP } from "../../images/centerPink.svg";
import { ImageBcg, Smile, SmilePink } from "./Image.styled";

export function Image() {
  return (
    <>
      <ImageBcg>
        <Smile>
          <CenterY />
        </Smile>
        <SmilePink>
          <CenterP />
        </SmilePink>
      </ImageBcg>
    </>
  );
}
