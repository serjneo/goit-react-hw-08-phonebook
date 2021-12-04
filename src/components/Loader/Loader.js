import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Load() {
  return (
    <div className="Loader">
      <Loader type="Rings" color="#00BFFF" height={150} width={150} />
    </div>
  );
}
