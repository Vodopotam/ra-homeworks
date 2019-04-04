const FontSelector = ({fonts, selectedFont, onSelect}) => {

	const chooseFont = (event) => {
		const selectedFont = fonts.filter(font => font.name === event.currentTarget.value);
		onSelect(selectedFont[0])
	}
    return (
        <div className="font-picker">
            {fonts.map((item, i) => {
            	return (
            		<div className="grid center font-item">
            			<input type="radio" name="font" value={item.name} id={item.name} onChange={chooseFont} />
            			<label htmlFor={item.name} className="grid-1">
            				<PictureFont text={item.name.slice(0, -1)} path={item.path} key={`char=${i}`} />
            			</label>
            		</div>
            		)
            })}
        </div>
    )
};