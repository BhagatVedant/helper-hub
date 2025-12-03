const services = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    short: 'Qualified plumbers for households.',
    description: 'Professional plumbers for installations, repairs and maintenance.',
    plans: [
      { id: 'basic', name: 'Basic', price: 499, features: ['Leaky taps', 'Minor repairs'], duration: '1-2 hrs' },
      { id: 'standard', name: 'Standard', price: 899, features: ['Pipe repair', 'Fitting'], duration: '2-4 hrs' },
      { id: 'premium', name: 'Premium', price: 1499, features: ['Full service', 'Emergency support'], duration: '4+ hrs' }
    ]
  },
  {
    id: 'cleaning',
    title: 'Cleaning',
    short: 'Home & office deep cleaning.',
    description: 'Trusted cleaners for one-time or recurring cleaning services.',
    plans: [
      { id: 'basic', name: 'Basic', price: 399, features: ['Surface clean', 'Dusting'], duration: '1-2 hrs' },
      { id: 'deep', name: 'Deep Clean', price: 999, features: ['Deep clean', 'Sanitization'], duration: '3-5 hrs' },
      { id: 'subscription', name: 'Subscription', price: 1499, features: ['Weekly visits', 'Discounts'], duration: 'Recurring' }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical',
    short: 'Certified electricians.',
    description: 'Electrical repairs, switchboard work and safety checks.',
    plans: [
      { id: 'inspection', name: 'Inspection', price: 299, features: ['Safety check', 'Minor fixes'], duration: '1 hr' },
      { id: 'repair', name: 'Repair', price: 799, features: ['Wiring', 'Replacements'], duration: '2-4 hrs' },
      { id: 'installation', name: 'Installation', price: 1299, features: ['Appliance install', 'Points'], duration: '2-5 hrs' }
    ]
  },
  {
    id: 'ac-repair',
    title: 'AC Repair',
    short: 'AC servicing and repair.',
    description: 'Servicing, gas top-up, and repairs for home ACs.',
    plans: [
      { id: 'service', name: 'Service', price: 699, features: ['Cleaning', 'Filter change'], duration: '1-2 hrs' },
      { id: 'repair', name: 'Repair', price: 1299, features: ['Fault diagnosis', 'Repairs'], duration: '2-4 hrs' },
      { id: 'annual', name: 'Annual Plan', price: 2499, features: ['4 services/year', 'Priority slots'], duration: 'Yearly' }
    ]
  }
]

export default services
