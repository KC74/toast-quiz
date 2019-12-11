import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    card: {
        width: 300,
        maxWidth: '100%',
        backgroundColor: '#383e49',
        margin: '1rem auto',
        minHeight: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    location: {
        fontSize: 14,
        color: 'orange',
    },
    pos: {
        marginBottom: 12,
        color: '#ffffff',
    },
    info: {
        color: '#ffffff',
    },
    summary: {
        color: '#60dbfc',
    },
})
