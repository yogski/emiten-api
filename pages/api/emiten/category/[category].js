import companies from '../../../../indonesia_public_companies.json'

export default function emitenCategoryHandler({ query: { category } }, res) {
  const filtered = companies.filter((p) => p.kategori === category)

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: `Emiten dengan kategori ${category} tak ditemukan.` })
  }
}