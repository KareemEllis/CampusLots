import os
import cv2
import numpy as np
from ultralytics import YOLO

from utils import object_counter
import torch

# USE GPU
device = "0" if torch.cuda.is_available() else "cpu"
if device == "0":
    torch.cuda.set_device(0)


#Web Camera
cap = cv2.VideoCapture('video2.mp4')


#Import YOLO
yolo_version = 'yolov8n.pt'
model_path = os.path.join('.', 'runs', 'detect', 'train', 'weights', 'best.pt')

# Using yolo here
model = YOLO(yolo_version)

right_line = [(800,500), (1240,500)]
left_line = [(750,500), (250,500)]

counter = object_counter.ObjectCounter()
counter.set_args(view_img=False,
                 reg_pts=right_line,
                 out_pts=left_line,
                 classes_names=model.names,
                 draw_tracks=False,
                 view_out_counts=False,
                 view_in_counts=False,
                 line_dist_thresh=3)

total_count = 0

# WHILE LOOP: Continuously have the window open until exit key is pressed
# or all frames have been displayed
while True:
    
    ret,frame = cap.read()
    
    if not ret:
        break
    
    results = model.track(frame, persist=True, verbose=False) #PERSIST: When True, the model will set ids to previously discovered detections in subsequent frames

    
    annotated_frame = counter.start_counting(frame, results)
    
    total_count = counter.count
    
    
    # Display total count on the frame
    cv2.putText(annotated_frame, f'Total Count: {total_count}', (50, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    
    # Display the annotated frame
    cv2.imshow("YOLOv8 Tracking", annotated_frame)

    
    if cv2.waitKey(1) & 0xFF == ord('q'): #change frame every 0.1s, exit by pressing q
        break
 
 
cap.release() 
cv2.destroyAllWindows()

print('Parking Lot closed, Current Vehicles in Lot: ', total_count)