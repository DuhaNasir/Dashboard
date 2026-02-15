
import Card from '../CardTamplates/Card';
import SocialTamplates from '../CardTamplates/SocialTamplates';
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function SocialMediaStats(){
return(

<Card  title="Social Media Stats"    >


<SocialTamplates icon={TiSocialTwitter}  iconColor='bg-blue-500' background='bg-blue-100' text='90K Followers' textColor='text-blue-500'  button='follow' buttonColor='bg-blue-500 hover:bg-blue-800'/>



<SocialTamplates icon={FaFacebookF}  iconColor=' bg-blue-700' background='bg-blue-200'  text='2M Like'  textColor='text-blue-600'  button='Like' buttonColor='bg-blue-700 hover:bg-blue-800'/>


<SocialTamplates icon={FaYoutube }  iconColor=' bg-[#ff0000]' background='bg-[#ffcccc]'  text='1M Subs'  textColor='text-red-600'  button='Subscribe' buttonColor='bg-red-600 hover:bg-red-800'/>



<SocialTamplates icon={FaLinkedin  }  iconColor='bg-[#0077b5]' background='bg-[#cce4f0]'  text='70K Followers'  textColor='text-[#0c7cb9]'  button='follow' buttonColor='bg-[#0077b5] hover:bg-blue-800'/>


</Card>


)


}