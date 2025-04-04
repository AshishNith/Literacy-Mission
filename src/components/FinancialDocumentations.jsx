import React from 'react'
import Button from './Button'

const FinancialDocumentations = () => {
  const documents = [
    {
      year: '2012-23',
      files: [
        {
          title: 'All Financial Records',
          url: 'https://drive.google.com/drive/folders/1W3W7HmaZyI0_EreeLCCZoHLlIIY_N2lW?usp=sharing',
          type: 'combined'
        }
      ]
    },
    {
      year: '2023-24',
      files: [
        {
          title: 'Expenditure & Donations',
          url: 'https://drive.google.com/drive/folders/1IGPfl-asAlaSIlKwPV3AspHFFpxMBUSe?usp=sharing',
          type: 'combined'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="financial-docs">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Financial Documentation</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Transparency in our financial records</p>
        </div>

        {/* Documents Grid */}
        <div className="max-w-4xl mx-auto">
          {documents.map((yearData, index) => (
            <div key={index} className="mb-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Financial Year {yearData.year}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {yearData.files.map((file, fileIndex) => (
                  <Button
                    key={fileIndex}
                    variant={file.type === 'donations' ? 'primary' : 'secondary'}
                    onClick={() => window.open(file.url, '_blank')}
                    icon={<i className="ri-file-pdf-line"></i>}
                    fullWidth
                  >
                    {file.title}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            All documents are in PDF format. Click on the buttons to view or download.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinancialDocumentations
