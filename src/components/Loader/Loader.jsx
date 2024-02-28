import { Audio } from  'react-loader-spinner'
import { WrapperLoader } from './Loader.styled';

export const Loader = () =>
(<WrapperLoader>
    <Audio
  visible={true}
  height="80"
  width="80"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="audio-wrapper"
/>
</WrapperLoader>);