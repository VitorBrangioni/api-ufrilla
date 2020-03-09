# api-ufrilla
API para provas de estágio da ufrilla.

---

### GET: /api/freelancer-type

Find all freelancers type

*RESPONSE:*
```[
    {
        "id": 1,
        "type": "garcom",
        "created_at": "2019-01-01T11:00:00.000Z",
        "updated_at": "2019-01-01T11:00:00.000Z"
    }
]```

### GET: /api/job

Find all jobs

*RESPONSE:*
`[
    {
        "id": 2,
        "quantity": 5,
        "value": 100,
        "description": "alo",
        "job_start": "2019-01-01T11:00:00.000Z",
        "job_end": "2019-01-01T11:00:00.000Z",
        "freelancer_type_id": 1,
        "created_at": "2019-01-01T11:00:00.000Z",
        "updated_at": "2019-01-01T11:00:00.000Z"
    }
]`


### POST: /api/job

Create a new job

*Body:*
`{
    "quantity": 3,
    "value": 100,
    "description": "description",
    "job_start": "2019-01-01T11:00:00.000Z",
    "job_end": "2019-01-01T11:00:00.000Z",
    "freelancer_type_id": 1
}`

### PUT: /api/job

Update a job

*Body:*
`{
	"id": 3,
    "quantity": 5,
    "value": 120
}`

**import collection: ** `https://www.getpostman.com/collections/00fb6c3ffaacc0ac1789`
