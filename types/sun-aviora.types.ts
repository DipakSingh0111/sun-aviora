export interface LinkItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ImageItem {
  src: string;
  alt: string;
  href?: string;
}

export interface SectionHeading {
  main: string;
  middle?: string;
  highlight?: string;
  end?: string;
}

export interface SocialLink {
  platform?: string;
  name?: string;
  href?: string;
  url?: string;
  icon?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageBannerData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export interface GlobalData {
  companyName: string;
  logo: ImageItem;
  footerLogo: ImageItem;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  socials: SocialLink[];
}

export interface HeaderData {
  topBar?: {
    visible: boolean;
    backgroundColor: string;
  };
  logo: ImageItem;
  menu: LinkItem[];
  cta: LinkItem & { showArrow?: boolean };
}

export interface HeroBannerData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  cta: LinkItem & { showArrow?: boolean };
  backgroundImage: string;
}

export interface AboutUsData {
  badge: string;
  heading: {
    main: string;
  };
  paragraphs: string[];
  cta: LinkItem & { showArrow?: boolean };
  images: {
    top: string;
    bottom: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: string;
  icon: string;
}

export interface ServicesPageServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: string;
  icon: string;
}

export interface ServiceDetailStep {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailWhyChooseCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailItem {
  id: string;
  badge: string;
  heading: SectionHeading;
  mainImage: string;
  tagline: string;
  description: string;
  subImages: string[];
  deliverySection: {
    heading: SectionHeading;
    description: string;
    list: ServiceDetailStep[];
  };
  whyChoose: {
    heading: SectionHeading;
    description: string;
    list: ServiceDetailWhyChooseCard[];
  };
}

export interface ServicesData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: ServiceItem[];
  page?: {
    header: {
      badge: string;
      heading: SectionHeading;
      description: string;
    };
    list: ServicesPageServiceItem[];
  };
  serviceDetails?: {
    sidebarList: { id: string; name: string }[];
    defaultService: ServiceDetailItem;
  };
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  isDecimal?: boolean;
  label: string;
  icon: string;
}

export interface StatsData {
  backgroundImage: string;
  list: StatItem[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  images: {
    large: string;
    small: string;
  };
  list: WhyChooseUsFeature[];
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ProjectSpec {
  icon: string;
  label: string;
  value: string;
}

export interface RelatedProjectItem {
  id: string;
  title: string;
  location: string;
  image: string;
}

export interface ProjectDetailsData {
  heroSection: {
    image: string;
    specCard: {
      heading: SectionHeading;
      list: ProjectSpec[];
    };
  };
  relatedProjects: RelatedProjectItem[];
  overview: {
    heading: SectionHeading;
    description: string;
  };
  challengesSolutions: {
    heading: SectionHeading;
    challenges: string[];
    solutions: string[];
  };
  resultsImpact: {
    heading: SectionHeading;
    description: string;
    bottomImage: string;
  };
}

export interface ProjectsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: ProjectItem[];
  page?: {
    header: {
      badge: string;
      heading: SectionHeading;
      description: string;
    };
    list: ProjectItem[];
  };
  details?: ProjectDetailsData;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  designation: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  image: string;
  imageBadge: {
    text: string;
  };
  list: TestimonialItem[];
}

export interface BlogPostItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface BlogNewsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: BlogPostItem[];
  page?: {
    header: {
      badge: string;
      heading: SectionHeading;
      description: string;
    };
    list: BlogPostItem[];
  };
  sidebar?: {
    categories: {
      name: string;
      category: string;
      count: string;
      targetId: string;
    }[];
    recentPosts: {
      id: string;
      title: string;
      date: string;
      image: string;
      href: string;
    }[];
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  leftCard: {
    badge: string;
    heading: SectionHeading;
    description: string;
    image: string;
  };
  rightSection: {
    badge: string;
    heading: SectionHeading;
    description: string;
    list: FaqItem[];
  };
}

export interface ContactPageData {
  header: {
    badge: string;
    heading: SectionHeading;
    description: string;
  };
  infoCard: {
    badge: string;
    heading: SectionHeading;
    description: string;
    location: {
      title: string;
      value: string;
    };
    phone: {
      title: string;
      value: string;
    };
    email: {
      title: string;
      value: string;
    };
    socials: SocialLink[];
  };
  form: {
    badge: string;
    heading: SectionHeading;
    description: string;
    submitButton: string;
  };
  mapEmbedUrl: string;
}

export interface FooterData {
  logo: ImageItem;
  description: string;
  quickLinks: {
    title: string;
    list: LinkItem[];
  };
  services: {
    title: string;
    list: LinkItem[];
  };
  contact: {
    title: string;
    address: {
      title: string;
      lines: string[];
    };
    phone: {
      title: string;
      value: string;
    };
    email: {
      title: string;
      value: string;
    };
  };
  socials: SocialLink[];
  copyright: string;
}

export interface SectionProps<T = any> {
  data?: T;
}

export namespace SectionProps {
  export type Global = { data?: GlobalData };
  export type Header = { data?: HeaderData };
  export type HeroBanner = { data?: HeroBannerData };
  export type AboutUs = { data?: AboutUsData; showCta?: boolean };
  export type Services = { data?: ServicesData; showAll?: boolean };
  export type Stats = { data?: StatsData };
  export type WhyChooseUs = { data?: WhyChooseUsData };
  export type Projects = { data?: ProjectsData };
  export type Testimonials = { data?: TestimonialsData };
  export type BlogNews = { data?: BlogNewsData; limit?: number };
  export type Faq = { data?: FaqData };
  export type ContactPage = { data?: ContactPageData };
  export type Footer = { data?: FooterData };
  export type Breadcrumb = { data?: PageBannerData };
}

export type HeaderProps = SectionProps.Header;
export type HeroBannerProps = SectionProps.HeroBanner;
export type AboutUsProps = SectionProps.AboutUs;
export type ServicesProps = SectionProps.Services;
export type StatsProps = SectionProps.Stats;
export type WhyChooseUsProps = SectionProps.WhyChooseUs;
export type ProjectsProps = SectionProps.Projects;
export type TestimonialsProps = SectionProps.Testimonials;
export type BlogNewsProps = SectionProps.BlogNews;
export type FaqProps = SectionProps.Faq;
export type ContactPageProps = SectionProps.ContactPage;
export type FooterProps = SectionProps.Footer;

export interface SunAvioraTemplateData {
  categories: {
    SunAviora: {
      templateComponents?: {
        [template: string]: {
          shared: { Header: string; Footer: string };
          pages: { [page: string]: { components: { key: string; component: string }[] } };
        };
      };
      sections: {
        Global?: { variants?: { SunAvioraGlobal1?: GlobalData } };
        Header?: { variants?: { SunAvioraHeader1?: HeaderData } };
        PageBanners?: {
          variants?: {
            SunAvioraPageBanners1?: {
              pages?: Record<string, PageBannerData>;
            };
          };
        };
        HeroBanner?: { variants?: { SunAvioraHeroBanner1?: HeroBannerData } };
        AboutUs?: { variants?: { SunAvioraAboutUs1?: AboutUsData } };
        Services?: { variants?: { SunAvioraServices1?: ServicesData } };
        Stats?: { variants?: { SunAvioraStats1?: StatsData } };
        WhyChooseUs?: { variants?: { SunAvioraWhyChooseUs1?: WhyChooseUsData } };
        Projects?: { variants?: { SunAvioraProjects1?: ProjectsData } };
        Testimonials?: { variants?: { SunAvioraTestimonials1?: TestimonialsData } };
        BlogNews?: { variants?: { SunAvioraBlogNews1?: BlogNewsData } };
        Faq?: { variants?: { SunAvioraFaq1?: FaqData } };
        ContactPage?: { variants?: { SunAvioraContactPage1?: ContactPageData } };
        Footer?: { variants?: { SunAvioraFooter1?: FooterData } };
      };
    };
  };
}
