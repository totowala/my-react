export default function UpperSection (props)
{
return ( 
  <section className="section--upper">
    <h4>{props.setup}</h4>
    <h4>{props.punchline}</h4>
  </section>
  
  )
 }