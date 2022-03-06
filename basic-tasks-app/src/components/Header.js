import Button from './Button';

const Header = ({text})  => {
    return (
        <div>
            <h1>{text}</h1>
            <Button />
        </div>
        );
}

export default Header;