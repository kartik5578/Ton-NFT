import { TonConnectButton } from '@tonconnect/ui-react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
   <>
<div className="fixed z-10 backdrop-blur-sm">
  <section className="relative mx-auto">
      
    <nav className="flex justify-between text-white w-screen px-24">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading">
          Ignitus Networks
        </a>
       
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
         
        <Link className='no-underline text-gray-200'  to="/">
          <li>Home</li>   </Link>  
          
          <Link className='no-underline text-gray-200' to="/all-nft">
          <li>All NFT</li>   </Link>
        
          <Link className='no-underline text-gray-200' to="/create">
          <li>Mint NFT</li>   </Link> 
        </ul>
        
        <div className="hidden xl:flex items-center space-x-5">
         
        
        <TonConnectButton></TonConnectButton>
        </div>
      </div>
    

    </nav>
    
  </section>
</div>


   </>
  )
}

export default Nav