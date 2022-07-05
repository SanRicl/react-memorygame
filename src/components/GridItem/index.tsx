import { GridItemType } from '../../types/GridItemTypes';
import * as C from './styles';
import b7Svg from '../../../public/svgs/b7.svg';
import { items } from '../../data/items';

interface Props {
  item: GridItemType;
  onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      showBackGround={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {!item.permanentShown && !item.shown && (
        <C.Icon src={b7Svg} alt="" opacity={0.1} />
      )}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};
