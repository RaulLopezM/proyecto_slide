import {  } from "react";
import {useState,Children,useEffect} from 'react'
import {motion} from "framer-motion"

export const PagePilling = ({children}) => {
	const [pagina, setPagina] = useState(0);

	const hijos = Children.map(children,(child)=>child)

	const detectarRueda = (e)=>{
		const {deltaY} = e;
		if(deltaY > 0){
			setPagina(pagina=>pagina+1);
		}
		else{
			setPagina(pagina=>pagina-1);
		}
		console.log(deltaY)
	}

	useEffect(() => {
		
		document.addEventListener('wheel',detectarRueda)

		return ()=>{
			document.removeEventListener('wheel',detectarRueda)
		}
	
	}, []);

  return (
	<motion.div
	className="contenedor">
		{hijos[Math.abs(pagina+1) % hijos.length]}
	</motion.div>
  )
}
