import { LoggerService } from "./logger.service"

export class ToolbarService {
  logger: LoggerService;

  constructor() {
    this.logger = new LoggerService();
  }

  getToolbar() {
    this.logger.log('Returned toolbar config');
    
    return [
      {
        label: 'Home',
        link: '#'
      },
      {
        label: 'Pricing',
        link: '#'
      },
      {
        label: 'Features',
        link: '#'
      },
      {
        label: 'Contacts',
        link: '#'
      },
      {
        label: 'Support',
        link: '#'
      }
    ]
  }
}