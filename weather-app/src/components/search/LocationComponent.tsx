import "./Search.css";
export type SearchResult = {
  name: string;
  region: string;
  country: string;
};

export const LocationComponent = ({ name, region, country }: SearchResult) => {
  return (
    <div className="data-search">
      <p>
        {name}, {region}, {country}{" "}
      </p>
    </div>
  );
};
