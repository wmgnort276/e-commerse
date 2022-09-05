import { makeStyles } from "@mui/styles";
const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  title: {
    alignItems: 'center',
    flewGrow: '1',
    display: 'flex',
    cursor: 'pointer',
  },
  image: {
    borderRadius: '100%',
    objectFit: 'cover',
    width: '25px',
    marginRight: '15px',
  }
}));