export default () => {
	const lg = useMediaQuery('(min-width: 1024px)')
	const md = useMediaQuery('(min-width: 768px)')
	const sm = useMediaQuery('(min-width: 640px)')
	return { lg, md, sm }
}
