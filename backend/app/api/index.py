from main import app

# Required for Vercel serverless deployment
def handler(request, context):
    return app