import companies from '../../../indonesia_public_companies.json'

export default function handler(req, res) {
  res.status(200).json(companies)
}
