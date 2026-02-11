import { Card, CardActions, CardContent, IconButton, Typography, useTheme } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCard({image, title, children, link}) {
    const theme = useTheme();
    return (
        <Card sx={{ width: 540, borderRadius: '20px', bgcolor: 'background.secondary' }}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 280,
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            >
                {/* Image */}
                <img
                    src={`/${image}`}
                    alt={title}
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    }}
                />
            </Box>

            <CardContent>
                <Typography variant="h5" fontWeight={'bold'} sx={{color: 'primary.main'}} >
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" 
                    color= "primary"
                    sx={{bgcolor: 'background.main'}}
                    component="a" href={link} target="_blank" rel="noopener noreferrer">
                    <LanguageIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
