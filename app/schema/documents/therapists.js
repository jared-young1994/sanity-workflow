import {
  BiBrain as TherapistsIcon,
} from 'react-icons/bi'

export default {
  name: 'therapists',
  type: 'document',
  icon: TherapistsIcon,
  fields: [
    {
      name: 'findTherapistTitle',
      type: 'string',
    },
    {
      name: 'therapists',
      type: 'array',
      of: [
        {
          name: 'therapist',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'biography',
              type: 'text',
            },
            {
              name: 'therapistImage',
              type: 'image',
            },
            {
              name: 'profession',
              type: 'string',
            },
            {
              name: 'qualifications',
              type: 'array',
              of: [{ type: 'string', name: 'qualification' }]
            },
            {
              name: 'languages',
              type: 'array',
              of: [{ type: 'string', name: 'language' }]
            },
            {
              name: 'specialties',
              type: 'array',
              of: [{ type: 'string', name: 'specialty' }]
            },
            {
              name: 'clientTypes',
              type: 'array',
              of: [{ type: 'string', name: 'clientType' }]
            },
            {
              name: 'therapyTypes',
              type: 'array',
              of: [{ type: 'string', name: 'therapyType' }]
            },
            {
              name: 'locations',
              type: 'array',
              of: [{ type: 'string', name: 'location' }]
            },
            {
              name: 'therapyFees',
              type: 'array',
              of: [
                {
                  name: 'fee',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                    },
                    {
                      name: 'price',
                      type: 'string',
                    },
                    {
                      name: 'therapyDuration',
                      type: 'string',
                    },
                    {
                      name: 'subTitle',
                      type: 'string',
                    },
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
  ]
}
