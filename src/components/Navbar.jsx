import styled from 'styled-components'
import { NightsStayOutlined, SearchOutlined, SettingsOutlined } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    justify-content: space-between;
    align-items: center;
    background-color: #323336;
    border-bottom: 1px solid gray;
`

const Logo = styled.div`
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 15px;
`

const ProfileContainer = styled.div`
    margin-right: 15px;
    display: flex;

`

const ThemeContainer = styled.div`
    display: flex;
    align-items: center;
    margin:0 5px;

`

const SettingsContainer = styled.div`
    display: flex;
    align-items: center;
    margin:0 5px;

`

const Profile = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: red;
    margin:0 5px;
    margin-right: 0;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

`

const SearchInput = styled.input`
    border:none;
    font-weight: 200;
    font-size: 16px;
    color: gray;
    background: none;
    margin-left: 5px;
    :focus-visible{
    outline: none;
}
`
const SvgComponent = (props) => (
    { ...props }
);


const Navbar = () => {
    return (
        <Container>
            <Logo>
                {SvgComponent(
                    <svg viewBox="0 0 513 513" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" height="40px" width="40px">
                        <path d="M256.025.05C117.67-2.678 3.184 107.038.025 245.383a240.703 240.703 0 0085.333 182.613v73.387c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 005.653-1.621l59.456-37.141a264.142 264.142 0 0094.891 17.429c138.355 2.728 252.841-106.988 256-245.333C508.866 107.038 394.38-2.678 256.025.05z" />
                        <path d="M330.518 131.099l-213.825 130.08c-7.387 4.494-5.74 15.711 2.656 17.97l72.009 19.374a9.88 9.88 0 007.703-1.094l32.882-20.003-10.113 37.136a9.88 9.88 0 001.083 7.704l38.561 63.826c4.488 7.427 15.726 5.936 18.003-2.425l65.764-241.49c2.337-8.582-7.092-15.72-14.723-11.078zM266.44 356.177l-24.415-40.411 15.544-57.074c2.336-8.581-7.093-15.719-14.723-11.078l-50.536 30.744-45.592-12.266L319.616 160.91 266.44 356.177z" fill="#fff" /></svg>
                )}
            </Logo>

            <SearchContainer>
                <SearchOutlined style={{ color: "gray", fontSize: 24 }} />
                <SearchInput placeholder="Search..." />
            </SearchContainer>

            <ProfileContainer>
                <ThemeContainer>
                    <NightsStayOutlined style={{ color: "yellow", fontSize: 24 }} />
                </ThemeContainer>
                <SettingsContainer>
                    <SettingsOutlined style={{ color: "gray", fontSize: 24 }} />
                </SettingsContainer>
                <Profile>
                </Profile>
            </ProfileContainer>
        </Container>
    )
}

export default Navbar
