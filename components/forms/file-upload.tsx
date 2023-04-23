import { ChangeEventHandler, useState } from 'react'
import Image from 'next/image'

interface FileUploadProps {
  id: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const FileUpload: React.FC<FileUploadProps> = ({ id, onChange }) => {
  const [preview, setPreview] = useState<string | null>(null)

  const handleAvatarChange = (files: any) => {
    if (files && files[0]) {
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          setPreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <>
      <input
        id={id}
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            handleAvatarChange(e.target.files)
          }
          onChange(e)
        }}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
      {preview && (
        <div className="space-y-1">
          <p className="text-gray-600">Preview:</p>
          <Image
            src={preview}
            alt="Avatar preview"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      )}
    </>
  )
}
