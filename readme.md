# OTHER APPROACHES

- using queue
- bath processing but that will not fullfill the usecase since it will wait for the complete batch to be completed.


# Apporach Used

- Simple approach has been implemented keeping a simple couter for marking the active tasks and making sure that active tasks not exceed maximum concurrency max.
-  Using built in nodejs event emitter to change the concurrency max on the fly.
