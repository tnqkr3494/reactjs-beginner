import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const coinValue = (event) => {
    setCoin(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setCoin(json[0].quotes.USD.price);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={coinValue}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <input type="number" placeholder="dolloar" onChange={onChange} />
      <h2>You can get {money == 0 ? "0" : coin / money}</h2>
    </div>
  );
}

export default App;
