import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Projectcard} from '../Component/projectcard/projectcard'

// Project interface
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  contentHeight?: 'compact' | 'normal' | 'expanded';
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,Projectcard],
  templateUrl: './projects.html',
  styleUrl: '../../styles/pages/_projects.less'
})
export class Projects {
  selectedCategory = 'fullstack';
  
  fullStackProjects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular, featuring dynamic components, LESS styling, and smooth animations. Showcases professional work and technical skills.',
      imageUrl: 'Images/DevelopmentImage.jpg',
      imageAlt: 'Portfolio website screenshot',
      githubUrl: 'https://github.com/your-username/portfolio-website',
      liveUrl: 'https://your-portfolio.netlify.app',
      techStack: ['Angular', 'TypeScript', 'LESS', 'HTML5'],
      contentHeight: 'expanded'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment integration, inventory management, and admin dashboard. Built with modern web technologies.',
      imageUrl: 'Images/DevelopmentImage.jpg',
      imageAlt: 'E-commerce platform interface',
      githubUrl: 'https://github.com/your-username/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.herokuapp.com',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, file sharing, and progress tracking capabilities.',
      imageUrl: 'Images/DevelopmentImage.jpg',
      imageAlt: 'Task management system dashboard',
      githubUrl: 'https://github.com/your-username/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      techStack: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io']
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts. Features responsive design and PWA capabilities.',
      imageUrl: 'Images/DevelopmentImage.jpg',
      imageAlt: 'Weather dashboard application',
      githubUrl: 'https://github.com/your-username/weather-dashboard',
      liveUrl: 'https://weather-dashboard-app.netlify.app',
      techStack: ['React', 'Chart.js', 'Weather API', 'PWA'],
      contentHeight: 'compact'
    }
  ];

  aiMlProjects: Project[] = [
    {
      title: 'Smart Image Classifier',
      description: 'Deep learning model for image classification using TensorFlow. Achieves 95% accuracy on custom dataset with data augmentation and transfer learning techniques.',
      imageUrl: 'Images/AIImage.jpg',
      imageAlt: 'AI image classification interface',
      githubUrl: 'https://github.com/your-username/image-classifier',
      liveUrl: 'https://image-classifier-demo.streamlit.app',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit']
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'Natural Language Processing application that analyzes sentiment in text data. Features real-time analysis, batch processing, and visualization of results.',
      imageUrl: 'Images/AIImage.jpg',
      imageAlt: 'Sentiment analysis dashboard',
      githubUrl: 'https://github.com/your-username/sentiment-analyzer',
      liveUrl: 'https://sentiment-analysis-app.herokuapp.com',
      techStack: ['Python', 'NLTK', 'scikit-learn', 'Flask']
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning platform for business forecasting with interactive visualizations, automated reporting, and model performance tracking.',
      imageUrl: 'Images/AIImage.jpg',
      imageAlt: 'Predictive analytics interface',
      githubUrl: 'https://github.com/your-username/predictive-analytics',
      liveUrl: 'https://analytics-dashboard-demo.plotly.dash.com',
      techStack: ['Python', 'Pandas', 'Plotly Dash', 'scikit-learn']
    },
    {
      title: 'Chatbot Assistant',
      description: 'Intelligent conversational AI with context awareness, multi-turn conversations, and integration capabilities. Built using transformers and NLP.',
      imageUrl: 'Images/AIImage.jpg',
      imageAlt: 'AI chatbot interface',
      githubUrl: 'https://github.com/your-username/chatbot-assistant',
      liveUrl: 'https://chatbot-demo.gradio.app',
      techStack: ['Python', 'Transformers', 'Gradio', 'Hugging Face']
    }
  ];

  // Category filtering
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getCurrentProjects(): Project[] {
    return this.selectedCategory === 'fullstack' ? this.fullStackProjects : this.aiMlProjects;
  }

  // Animation for smooth transitions
  onCategoryChange() {
    // Optional: Add animation logic here if needed
  }

  // Get project count for display
  getProjectCount(category: string): number {
    return category === 'fullstack' ? this.fullStackProjects.length : this.aiMlProjects.length;
  }

  // Track by function for ngFor optimization
  trackByTitle(index: number, project: Project): string {
    return project.title;
  }

}
