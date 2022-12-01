import {createGlobalStyle} from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;  
  }

  :root {
    --secondary: #000;
    --primary: #17ba55;
    --error:#f45446;
    --border: #3F3D56;
    --dark: #2f2e41
  }

  body {
    display: flex;
    color: var(--secondary);
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(0.45turn, #13a049 , #f4f4f4);

    height: 100vh;
    font-family: 'Roboto', serif;
  }


  .footer-container{
    text-align: center;
    position:fixed;
    padding-bottom: 20px;
    bottom:0;
    max-width: 1260px;
	  min-width: 1080px;
  }

  .footer{
    font-size: 13px;
    font-weight: bold;
  }
 
  .container-motion{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
  }

  //Button
  .custom-btn {
		display: inline-block;
		border-radius: 4px;
		background-color: var(--primary);
		border: none;
		color: #ffffff;
		text-align: center;
		font-size: 16px;
		padding: 10px 12px;
		width: 130px;
		transition: all 0.5s;
		cursor: pointer;
		margin: 3px;
	}

	.custom-btn span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}

	.custom-btn span:after {
		content: '»';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -15px;
		transition: 0.5s;
	}

	.custom-btn:hover span {
		padding-right: 15px;
	}

	.custom-btn:hover span:after {
		opacity: 1;
		right: 0;
	}

	.custom-btn:disabled {
		background-color: #17ba5581;
		transition: all 0.25s;
		&:hover {
			cursor: not-allowed;
		}
	}

	.custom-btn:disabled > span {
		transition: all 0.25s;
		&:hover {
			cursor: not-allowed;
		}
	}

  
`;
