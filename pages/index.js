 import React,{useEffect,useState,useContext} from "react"

 import { CrowdFundingContext } from "@/Context/CrowdFunding"
 import {Hero,Card,Pupup} from '../Components/index'
 
 const index = () => {
  const {titleData,getCampaigns,createCampaign,donate,getUserCampaigns,getDonations}=useContext(CrowdFundingContext)
  const [allcampaign,setAllcampaign]= useState()
  const [usercampaign, setUsercampaign]=useState()
  
   useEffect(()=>{
    const fetchData = async()=>{
      const allData = await getCampaigns()
      console.log("All campaign data",allData);
      setAllcampaign(allData)

      const userData = await getUserCampaigns()
      console.log("user campaign data", userData);
      setUsercampaign(userData)
      
      
    }
    fetchData()
   },[])
  const [openModel, setOpenModel] = useState(false)
  const [donateCampaign, setDonateCampaign]=useState()
  console.log(donateCampaign);
  
   return (
      <>
      <Hero titleData={titleData} createCampaign={createCampaign} getCampaigns={getCampaigns}/>

      <Card title="All Listed Campaign"
      allcampaign={allcampaign}
      setOpenModel={setOpenModel}
      setDonate={setDonateCampaign}/>
      <Card title="Your Created Campaign"
      allcampaign={usercampaign}
      setOpenModel={setOpenModel}
      setDonate={setDonateCampaign}/>

      {openModel && (
        <Pupup
        setOpenModel={setOpenModel}
        getDonations = {getDonations}
        donate={donateCampaign}
        donateFunction={donate}
        />
      )}
      </>
   )
 }
 
 export default index