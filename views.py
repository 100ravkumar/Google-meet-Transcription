from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Endpoint to receive transcription from Chrome extension
@csrf_exempt
def receive_transcription(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            transcript = data.get('transcript', '')

            # Process transcription (e.g., store it or send it to the client)
            print(f"Received transcription: {transcript}")

            return JsonResponse({'status': 'success', 'message': 'Transcription received.'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method.'})
