import {motion} from 'framer-motion';

interface Props {
	children: JSX.Element;
}

export function MotionOpacity({children}: Props) {
	return (
		<motion.div
			key={'motion-interface'}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.5}}
			className='container-motion'
		>
			{children}
		</motion.div>
	);
}
