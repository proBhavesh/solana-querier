import axios from "axios";
const blockData = async () => {
  var data = JSON.stringify({
    query: `query{
    solana{
   blockRewards{
    hash
    amount
    }
    }
}`,
    variables: {},
  });

  var config = {
    method: "post",
    url: "https://api.solana.fm",
    headers: {
      apikey: process.env.REACT_APP_API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios(config);
  return await res;
};

const accountWithHightestBal = async () => {
  var data = JSON.stringify({
    query: `query {
  solana {
    accountsWithHighestBalances {
      account
      balance
    }
  }
}`,
    variables: {},
  });

  var config = {
    method: "post",
    url: "https://api.solana.fm",
    headers: {
      apikey: process.env.REACT_APP_API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios(config);
  return await res;
};

export { blockData, accountWithHightestBal };
