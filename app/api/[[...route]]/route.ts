import { handle } from "hono/vercel";
import { Hono } from "hono";
import product from './product/getproduct';
import suggestion from './product/suggestion';
import limitproduct from './product/limitproduct'
import practicesuggestion from './practiceapi/practicesuggestion'
import practiceslug from './practiceapi/practiceslug'

export const runtime = "edge"

const app = new Hono().basePath("/api");

const routes = app
    .route("/product", product)
    .route("/suggestion", suggestion)
    .route("/limitproduct", limitproduct)
    .route('/practicesuggestion', practicesuggestion)
    .route('/practiceslug', practiceslug)

export const GET = handle(app)
export const POST = handle(app)

export type Apptype = typeof routes;