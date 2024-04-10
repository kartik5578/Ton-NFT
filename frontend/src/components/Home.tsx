import { useEffect, useState } from "react";
import Cards from "./Cards";
// import Info from './NFTinfo';
// import { useMainContract } from '../hooks/useMainContract';

interface Item {
    ipfs_pin_hash: string;
}

interface dataItem {
    count: number;
    rows: [];
}

function Home() {
    // const { sendIncrement } = useMainContract();
    const [items, setItems] = useState<Item[]>([]);
    // const [toggle, setToggle] = useState<boolean>(false)
    // const [nftitem, setNftitem] = useState<any>(null)

    useEffect(() => {
        const uri: string = "https://api.pinata.cloud/data/pinList";

        // Define headers
        const header: HeadersInit = {
            "Content-Type": "application/json",
            pinata_api_key: `dedc16b75664bc108136`,
            pinata_secret_api_key: `2b8fc356900683c32c2c59356ce60d2a97d2561b2d89d95efda9d02b399e44c8`,
        };

        fetch(uri, {
            method: "GET",
            headers: header,
        })
            .then((response: Response) => {
                if (response.ok) {
                    // Parse the JSON response
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((files: dataItem) => {
                setItems(files.rows);
                console.log(files);
            })
            .catch((error: Error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <>
            {/* {toggle ? <Info  setToggle={setToggle} nftitem={nftitem}/> :
       <div className='flex flex-wrap gradient-bg-welcome min-h-screen  gap-10 justify-center pt-24 pb-5 px-16'>
        {items.map((item: any)=>(
          <Cards item={item} openNFT={openNFT}/>
          
        ))}
        </div>
  } */}

            <div className="flex flex-wrap gradient-bg-welcome min-h-screen  gap-10 justify-center pt-24 pb-5 px-16">
                {items.map((item: Item, index: number) => (
                    <Cards key={index} item={item} />
                ))}
            </div>
        </>
    );
}

export default Home;

// import React, { useEffect, useState } from 'react';
// import Cards from './Cards';
// // import Info from './NFTinfo';
// import { useMainContract } from '../hooks/useMainContract';

// function Home() {
//   const{sendIncrement} = useMainContract();
//   const [items, setItems] = useState<Array>([]);
//   // const [toggle, setToggle] = useState<boolean>(false)
//   // const [nftitem, setNftitem] = useState<any>(null)

//   useEffect(()=>{
//     const uri: string = 'https://api.pinata.cloud/data/pinList';

//     // Define headers
//     const header: HeadersInit = {
//     'Content-Type': 'application/json',
//     'pinata_api_key': `dedc16b75664bc108136`,
//     'pinata_secret_api_key': `2b8fc356900683c32c2c59356ce60d2a97d2561b2d89d95efda9d02b399e44c8`
//     };

//     fetch(uri, {
//     method: 'GET',
//     headers: header
//     })
//     .then((response: Response) => {
//         if (response.ok) {
//         // Parse the JSON response
//         return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then((files: any) => {
//        setItems(files.rows);
//         console.log(files);
//     })
//     .catch((error: Error) => {
//         console.error('Error:', error);
//     });
//   },[])

//   // async function openNFT(data:any) {
//   //   console.log(data)

//   //  const res = await sendIncrement(0.05).then(result => {

//   //     setNftitem(data);
//   //     setToggle(true);
//   //     console.log(result);
//   // }).catch(error => {
//   //     console.error(error);
//   // });

//   // console.log(res);

// //   const transaction = {
// //     validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
// //     messages: [
// //         {
// //             address: "0QAm1rSU0WpfDj5fzB1OZcegGF9fSHC3LA3vNvpbAFR3mc6A",
// //             amount: "20000000",
// //          // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
// //         },
// //     ]
// // }

// // try {
// //   const tonConnectUI = new TonConnectUI({ //connect application
// //     manifestUrl: 'https:/localhost:5173/all-nft/tonconnect-manifest.json',
// //     // buttonRootId: 'ton-connect-btn'
// // });
//   // const result = await tonConnectUI.sendTransaction(transaction).then(res =>{
//   //   setNftitem(data);
//   //   setToggle(true);
//   //   console.log(result);
//   // }).catch(err =>{
//   //   console.log(err);
//   // });

//   // you can use signed boc to find the transaction
//   // const someTxData = await myAppExplorerService.getTransaction(result.boc);
//   // alert('Transaction was sent successfully', someTxData);

// // } catch (e) {
// //   console.error(e);
// // }
//   // }

//   return (
//     <>
//     {/* {toggle ? <Info  setToggle={setToggle} nftitem={nftitem}/> :
//      <div className='flex flex-wrap gradient-bg-welcome min-h-screen  gap-10 justify-center pt-24 pb-5 px-16'>
//       {items.map((item: any)=>(
//         <Cards item={item} openNFT={openNFT}/>

//       ))}
//       </div>
// } */}

// <div className='flex flex-wrap gradient-bg-welcome min-h-screen  gap-10 justify-center pt-24 pb-5 px-16'>
//       {items.map((item: any)=>(
//         <Cards item={item} />

//       ))}
//       </div>
//     </>
//   );
// }

// export default Home;
