import CarsList from '../../components/CarsList/CarsList.jsx';
import SearchFilter from '../../components/SearchFilter/SearchFilter.jsx';

export default function CatalogPage() {
  return (
    <div className="container">
      <SearchFilter />
      <CarsList />
    </div>
  );
}
