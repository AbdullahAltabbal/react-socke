const CheckBox = (props) => {

    const { titel, onChange, checked } = props

    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span>{titel}</span>
        </label>
    );
}

export default CheckBox;
