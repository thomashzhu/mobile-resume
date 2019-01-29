import { Content } from '../values/types';

export const EDUCATION_DATA: Content[] = [
  {
    id: 4,
    title: 'Android Developer Nanodegree',
    organization: 'Udacity',
    organizationUrl: 'https://confirm.udacity.com/MHYH9EPA',
    fromDate: '01/2018',
    toDate: '10/2018',
    location: 'San Francisco, CA',
    summary: undefined,
    descriptions: [],
  },
  {
    id: 3,
    title: 'React Native Bootcamp',
    organization: 'MobileSpace',
    fromDate: '01/2018',
    toDate: '05/2018',
    location: 'San Francisco, CA',
    summary: 'Projects:',
    descriptions: [
      'Daug (a social network for pet owners) using authentication (with Facebook & Twitter login), navigation, redux, and the Camera API.',
      'Spiral (a crypto wallet) using navigation, redux (with redux thunk and redux persist), PostgreSQL, and the CryptoCompare API.',
    ],
  },
  {
    id: 2,
    title: 'iOS Bootcamp',
    organization: 'CodePath',
    fromDate: '01/2017',
    toDate: '05/2017',
    location: 'San Francisco, CA',
    summary: 'Projects: (* selected as top submitted projects)',
    descriptions: [
      'Tip Calculator *',
      'IMDB clone',
      'Yelp clone *',
      'Twitter clone *',
      'Instagram clone *',
    ],
  },
  {
    id: 1,
    title: 'Business Admin. & Economics',
    organization: 'Haas School of Business, UC Berkeley',
    fromDate: '08/2008',
    toDate: '12/2012',
    location: 'Berkeley, CA',
    summary: undefined,
    descriptions: [],
  },
];

export const EXPERIENCES_DATA: Content[] = [
  {
    id: 6,
    title: 'Construction Funding Analyst',
    organization: 'Provident Funding Associates',
    fromDate: '04/2015',
    toDate: '07/2017',
    location: 'San Bruno, CA',
    summary: undefined,
    descriptions: [
      'Appointed by the department manager to handle draw requests and budget inquiries from Colorado Federal Building Trust (CFBI)',
      'Reconcile daily cash transactions to project fund availability for future construction draws and land acquisition',
      'Calculate and maintain interest and fee schedule for each construction projects, and advise CFBI if budget is about to be exceeded',
      'Migrate existing construction data to DocIt.com (a cloud service), and re-structure current data storage system to optimize local and cloud informational exchange',
      'Create automated reports, Excel add-in and Outlook add-in using VBA to reduce replicate manual work',
    ],
  },
  {
    id: 5,
    title: 'Treasury Management Analyst',
    organization: 'Provident Funding Associates',
    fromDate: '06/2014',
    toDate: '09/2017',
    location: 'San Bruno, CA',
    summary: undefined,
    descriptions: [
      'Promoted by the Chief Operating Officer due to strong qualitative skills demonstrated while working in the Retail department',
      'Reconcile bank transactions and trading activities on a daily basis that are used by the CEO, CFO, president, and other executives',
      'Record daily cash activities to perform treasury forecast and liquidation estimate, both short-term and long-term',
      'Execute funds movement transactions using ACH, internal and external wire transferring, and warehouse bank drafting',
      'Maintain organization accounts in every warehouse bank (Bank of America, Barclays, CFSB, Citi, Credit Suisse, Deutsche Bank, RBS, UBS, US Bank, and Wells Fargo) by monitoring account activities and investigating abnormal transactions',
      'Develop Excel and Outlook add-ins using VBA to facilitate daily operations of the Treasury Management Desk',
      'Reconcile 12 cash and non-cash accounts on a monthly basis and resolve variances',
      'Determine the amount of funds required to be transferred to warehouse banks in order to settle paid-off loans',
    ],
  },
  {
    id: 4,
    title: 'Business Development Specialist',
    organization: 'Provident Funding Associates',
    fromDate: '01/2014',
    toDate: '05/2014',
    location: 'San Bruno, CA',
    summary: undefined,
    descriptions: [
      'Appointed by the department manager after learning about my strong analytical skills and critical thinking',
      'Prepared reports that were used by the management team for operational performance tracking and business decision making',
      'Improved efficiency by more than 90% by re-designing and automating existing reports using the VBA programming language',
      'Developed new VBA tools for annual employee evaluation, payroll calculation, all-in-one loan dashboard, and lead tracking, etc.',
      'Generated talk time data using MX Admin to determine how efficient lead specialists, loan agents, and processors are over phones',
    ],
  },
  {
    id: 3,
    title: 'Mortgage Benefit Program (MBP) Account Manager',
    organization: 'Provident Funding Associates',
    fromDate: '09/2013',
    toDate: '05/2014',
    location: 'San Bruno, CA',
    summary: undefined,
    descriptions: [
      'Promoted by the team leader and department manager due to great phone interaction skills with customers and external clients',
      'Generated the most MBP leads organization-wise (even exceeded specially-trained loan agents) by contacting outside HR personnel ',
      'Monitored the number of new MBP leads, enrollments, and re-activated memberships on a daily, weekly, and monthly basis',
      'Analyzed performance of each MBP organization by comparing leads and loans generated against the amount of savings offered',
    ],
  },
  {
    id: 2,
    title: 'Loan Servicing Analyst',
    organization: 'Provident Funding Associates',
    fromDate: '08/2013',
    toDate: '11/2013',
    location: 'San Bruno, CA',
    summary: undefined,
    descriptions: [
      'Referred by the team leader to the Loan Servicing Department based on previous job performance',
      'Performed various transactions including loan payments, escrow transactions, late payment disputes, payoff, and loan modification',
      'Provided instant solutions to customer inquiries over the phone with professional communication and excellent customer service',
      'Addressed research requests from external clients by collaborating with insurance agents, title companies, and county tax assessors',
    ],
  },
  {
    id: 1,
    title: 'Residential Mortgage Funder',
    organization: 'Provident Funding Associates',
    fromDate: '01/2013',
    toDate: '09/2013',
    location: 'San Bruno, CA',
    summary: undefined,
    descriptions: [
      'Obtained mortgage funding authority as the 1st person in organization history to pass both exams with perfect scores',
      'Ranked 2nd organization-wise for the number of loans funded and 1st for the number of loan conditions cleared',
      'Reviewed all loan documents for closing to ensure compliance with investor requirements and Freddie Mac guidelines',
      'Collaborated with title companies for accurate and timely reconciliation of fees in order to comply with HUD and RESPA',
      'Determined that all conditions were either satisfied or approved by organization’s Policies and Procedures prior to fund disbursement',
    ],
  },
];

export const SKILLS_DATA = [
  { title: 'Technologies', data: ['React', 'React Native', 'iOS', 'Android', 'Java', 'JavaScript', 'TypeScript', 'Swift', 'AWS'] },
  { title: 'Tools', data: ['Sketch', 'PhotoShop', 'Git', 'GitHub', 'Excel', 'Slack'] },
  { title: 'React Native', data: ['Core API', 'Navigation', 'Redux', 'Animation', 'Gestures', 'Expo', 'Jest & Enzyme', 'ESLint / TSLint'] },
  { title: 'AWS', data: ['IAM', 'API Gateway', 'CloudWatch', 'Cognito', 'AppSync (learning)'] },
];

export const RECOGNITION_DATA = [
  { title: 'SF Hacks 2018', data: ['Best Mobile App', 'Best Beginner Hack', 'Best use of Dash API'] },
  { title: 'From Google', data: ['Associate Android Developer Certificate', 'Grow with Google Scholarship (twice)'] },
  { title: 'CodePath', data: ['Best Design (2nd place)'] },
];
