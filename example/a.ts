import { Elysia, t } from '../src'

const app = new Elysia()
	.post('/0.7', ({ body }) => body, {
		body: t.MaybeEmpty(
			t.Object({
				name: t.String(),
				job: t.String(),
				trait: t.Optional(t.String())
			})
		)
	})
	.listen(3000)
