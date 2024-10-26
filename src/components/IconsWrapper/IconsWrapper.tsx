import {
  MdBattery30,
  MdSignalCellular2Bar,
  MdSignalWifi3Bar,
} from 'react-icons/md';

export function IconsWrapper() {
  return (
    <div>
      <MdSignalWifi3Bar />
      <MdSignalCellular2Bar />
      <MdBattery30 />
    </div>
  );
}
