import '../../App.css';
import { Box } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import PersonalProjects from './PersonalProjects.json';

export default function PortfolioPage() {
  return (
    <>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, pt: 3 }}>
            {PersonalProjects.map((project, index) => (
                <ProjectCard key={index} 
                    image={process.env.PUBLIC_URL + project.image}
                    title={project.name} 
                    children={project.description} 
                    link={project.link}/>
                    
            ))}
        </Box>

        {/*<Box
           sx={{
            px: { xs: 2, sm: 4, md: 6 },  
            pt: { xs: 3, sm: 4, md: 6 },
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
          }}
        >
          {PersonalProjects.map((project, index) => (
            <Box key={index}>
              <img
                src={process.env.PUBLIC_URL + project.image}
                alt={project.name}
                style={{ width: '100%', display: 'block' }}
              />
            </Box>
          ))}
        </Box>
        */}
    </>
  );
}