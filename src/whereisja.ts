import { Handler } from 'aws-lambda';

export const  get: Handler = async (event: any) => {
  const jaWisdoms = JSON.parse(
    await (await fetch('https://raw.githubusercontent.com/amohamed11/whereisja/main/quotes.json')).text()
  );
  const wisdom = jaWisdoms[Math.floor(Math.random() * jaWisdoms.length)];
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: wisdom,
      }
    ),
  };

  return new Promise((resolve) => {
    resolve(response)
  })
}
