import Card from '../CardTamplates/Card'
import UploadSt from '../CardTamplates/UploadSt';


export default function LatestUploads(){

return(
<Card title="Latest Uploads"  >
 
<UploadSt title="my-file.pdf" text="Elzero"  days="2.9mb"  img="/imgs/pdf.svg"/>


<UploadSt title="My-Video-File.avi" text="Admin" days="4.9mb" img="/imgs/avi.svg" />


<UploadSt title="My-Psd-File.pdf" text="Osama" days="4.5mb" img="/imgs/psd.svg"/>


<UploadSt title="My-Zip-File.pdf" text="User" days="8.9mb"  img="/imgs/zip.svg"/>



<UploadSt title="My-DLL-File.pdf" text="Admin"  days="4.9mb"  img="/imgs/dll.svg"/>


<UploadSt title="My-Eps-File.pdf" text="Designer"  days="8.9mb"  img="/imgs/eps.svg"/>

</Card>




);

}
