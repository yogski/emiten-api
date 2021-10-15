import companies from '../../../indonesia_public_companies.json'

export default function emitenHandler({ query: { code } }, res) {
  const filtered = companies.filter((p) => p.kode_emiten === code)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Emiten dengan code ${code} tak ditemukan.` })
  }
}