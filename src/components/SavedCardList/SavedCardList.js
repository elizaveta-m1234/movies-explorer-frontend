import './SavedCardList.css';
import SavedCard from '../SavedCard/SavedCard';

function SavedCardList() {

  return (
    <ul className='card-list'>
      <SavedCard />
      <SavedCard />
      <SavedCard />
    </ul>
  )
}

export default SavedCardList