import pdfFile from '../assets/StarProject.pdf'

export default function Tech() {
  return (
    <div>
      <h2>Tech</h2>
      <a href={pdfFile} download>Download PDF</a>
      <iframe 
        src={pdfFile} 
        width="100%" 
        height="800px"
        title="Star Project"
      ></iframe>
    </div>
  )
}
