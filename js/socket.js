
//All kinds of error listener
socket.on("error", function(message){
  console.log(message);
})

//All kinds of message listener
socket.on("message", function(message){
	console.log(message);
})

//Message ID = 0, HEARTBEAT listener
socket.on('HEARTBEAT', function(message) {
  // console.log(message);
});

//Message ID = 1, SYS_STATUS listener
socket.on('SYS_STATUS', function(message) {
  // console.log(message);
});

//Message ID = 2, SYSTEM_TIME listener
socket.on('SYSTEM_TIME', function(message) {
  // console.log(message);
});

//Message ID = 4, PING listener
socket.on('PING', function(message) {
  // console.log(message);
});

//Message ID = 5, CHANGE_OPERATOR_CONTROL listener
socket.on('CHANGE_OPERATOR_CONTROL', function(message) {
  // console.log(message);
});

//Message ID = 6, CHANGE_OPERATOR_CONTROL_ACK listener
socket.on('CHANGE_OPERATOR_CONTROL_ACK', function(message) {
  // console.log(message);
});

//Message ID = 7, AUTH_KEY listener
socket.on('AUTH_KEY', function(message) {
  // console.log(message);
});

//Message ID = 11, SET_MODE listener
socket.on('SET_MODE', function(message) {
  // console.log(message);
});

//Message ID = 20, PARAM_REQUEST_READ listener
socket.on('PARAM_REQUEST_READ', function(message) {
  // console.log(message);
});

//Message ID = 21, PARAM_REQUEST_LIST listener
socket.on('PARAM_REQUEST_LIST', function(message) {
  // console.log(message);
});

//Message ID = 22, PARAM_VALUE listener
socket.on('PARAM_VALUE', function(message) {
  // console.log(message);
});

//Message ID = 23, PARAM_SET listener
socket.on('PARAM_SET', function(message) {
  // console.log(message);
});

//Message ID = 24, GPS_RAW_INT listener
socket.on('GPS_RAW_INT', function(message) {
   // console.log(message);
});

//Message ID = 25, GPS_STATUS listener
socket.on('GPS_STATUS', function(message) {
  // console.log(message);
});

//Message ID = 26, SCALED_IMU listener
socket.on('SCALED_IMU', function(message) {
  // console.log(message);
});

//Message ID = 27, RAW_IMU listener
socket.on('RAW_IMU', function(message) {
  // console.log(message);
});

//Message ID = 28, RAW_PRESSURE listener
socket.on('RAW_PRESSURE', function(message) {
  // console.log(message);
});

//Message ID = 29, SCALED_PRESSURE listener
socket.on('SCALED_PRESSURE', function(message) {
  // console.log(message);
});

//Message ID = 30, ATTITUDE listener
socket.on('ATTITUDE', function(message) {
  // console.log(message);
});

//Message ID = 31, ATTITUDE_QUATERNION listener
socket.on('ATTITUDE_QUATERNION', function(message) {
  // console.log(message);
});

//Message ID = 32, LOCAL_POSITION_NED listener
socket.on('LOCAL_POSITION_NED', function(message) {
  // console.log(message);
});

//Message ID = 33, GLOBAL_POSITION_INT listener
socket.on('GLOBAL_POSITION_INT', function(message) {
  // console.log(message);
});

//Message ID = 34, RC_CHANNELS_SCALED listener
socket.on('RC_CHANNELS_SCALED', function(message) {
  // console.log(message);
});

//Message ID = 35, RC_CHANNELS_RAW listener
socket.on('RC_CHANNELS_RAW', function(message) {
  // console.log(message);
});

//Message ID = 36, SERVO_OUTPUT_RAW listener
socket.on('SERVO_OUTPUT_RAW', function(message) {
  // console.log(message);
});

//Message ID = 37, MISSION_REQUEST_PARTIAL_LIST listener
socket.on('MISSION_REQUEST_PARTIAL_LIST', function(message) {
  // console.log(message);
});

//Message ID = 38, MISSION_WRITE_PARTIAL_LIST listener
socket.on('MISSION_WRITE_PARTIAL_LIST', function(message) {
  // console.log(message);
});

//Message ID = 39, MISSION_ITEM listener
socket.on('MISSION_ITEM', function(message) {
  // console.log(message);
});

//Message ID = 40, MISSION_REQUEST listener
socket.on('MISSION_REQUEST', function(message) {
  // console.log(message);
});

//Message ID = 41, MISSION_SET_CURRENT listener
socket.on('MISSION_SET_CURRENT', function(message) {
  // console.log(message);
});

//Message ID = 42, MISSION_CURRENT listener
socket.on('MISSION_CURRENT', function(message) {
  // console.log(message);
});

//Message ID = 43, MISSION_REQUEST_LIST listener
socket.on('MISSION_REQUEST_LIST', function(message) {
  // console.log(message);
});

//Message ID = 44, MISSION_COUNT listener
socket.on('MISSION_COUNT', function(message) {
  // console.log(message);
});

//Message ID = 45, MISSION_CLEAR_ALL listener
socket.on('MISSION_CLEAR_ALL', function(message) {
  // console.log(message);
});

//Message ID = 46, MISSION_ITEM_REACHED listener
socket.on('MISSION_ITEM_REACHED', function(message) {
  // console.log(message);
});

//Message ID = 47, MISSION_ACK listener
socket.on('MISSION_ACK', function(message) {
  // console.log(message);
});

//Message ID = 48, SET_GPS_GLOBAL_ORIGIN listener
socket.on('SET_GPS_GLOBAL_ORIGIN', function(message) {
  // console.log(message);
});

//Message ID = 49, GPS_GLOBAL_ORIGIN listener
socket.on('GPS_GLOBAL_ORIGIN', function(message) {
  // console.log(message);
});

//Message ID = 50, SET_LOCAL_POSITION_SETPOINT listener
socket.on('SET_LOCAL_POSITION_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 51, LOCAL_POSITION_SETPOINT listener
socket.on('LOCAL_POSITION_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 52, GLOBAL_POSITION_SETPOINT_INT listener
socket.on('GLOBAL_POSITION_SETPOINT_INT', function(message) {
  // console.log(message);
});

//Message ID = 53, SET_GLOBAL_POSITION_SETPOINT_INT listener
socket.on('SET_GLOBAL_POSITION_SETPOINT_INT', function(message) {
  // console.log(message);
});

//Message ID = 54, SAFETY_SET_ALLOWED_AREA listener
socket.on('SAFETY_SET_ALLOWED_AREA', function(message) {
  // console.log(message);
});

//Message ID = 55, SAFETY_ALLOWED_AREA listener
socket.on('SAFETY_ALLOWED_AREA', function(message) {
  // console.log(message);
});

//Message ID = 56, SET_ROLL_PITCH_YAW_THRUST listener
socket.on('SET_ROLL_PITCH_YAW_THRUST', function(message) {
  // console.log(message);
});

//Message ID = 57, SET_ROLL_PITCH_YAW_SPEED_THRUST listener
socket.on('SET_ROLL_PITCH_YAW_SPEED_THRUST', function(message) {
  // console.log(message);
});

//Message ID = 58, ROLL_PITCH_YAW_THRUST_SETPOINT listener
socket.on('ROLL_PITCH_YAW_THRUST_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 59, ROLL_PITCH_YAW_SPEED_THRUST_SETPOINT listener
socket.on('ROLL_PITCH_YAW_SPEED_THRUST_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 60, SET_QUAD_MOTORS_SETPOINT listener
socket.on('SET_QUAD_MOTORS_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 61 SET_QUAD_SWARM_ROLL_PITCH_YAW_THRUST listener
socket.on('SET_QUAD_SWARM_ROLL_PITCH_YAW_THRUST', function(message) {
  // console.log(message);
});

//Message ID = 62 NAV_CONTROLLER_OUTPUT listener
socket.on('NAV_CONTROLLER_OUTPUT', function(message) {
  // console.log(message);
});

//Message ID = 63 SET_QUAD_SWARM_LED_ROLL_PITCH_YAW_THRUST listener
socket.on('SET_QUAD_SWARM_LED_ROLL_PITCH_YAW_THRUST', function(message) {
  // console.log(message);
});

//Message ID = 64 STATE_CORRECTION listener
socket.on('STATE_CORRECTION', function(message) {
  // console.log(message);
});

//Message ID = 66 REQUEST_DATA_STREAM listener
socket.on('REQUEST_DATA_STREAM', function(message) {
  // console.log(message);
});


//Message ID = 67 DATA_STREAM listener
socket.on('DATA_STREAM', function(message) {
  // console.log(message);
});

//Message ID = 69 MANUAL_CONTROL listener
socket.on('MANUAL_CONTROL', function(message) {
  // console.log(message);
});

//Message ID = 70 RC_CHANNELS_OVERRIDE listener
socket.on('RC_CHANNELS_OVERRIDE', function(message) {
  // console.log(message);
});

//Message ID = 74 VFR_HUD listener
socket.on('VFR_HUD', function(message) {
  // console.log(message);
});

//Message ID = 76 COMMAND_LONG listener
socket.on('COMMAND_LONG', function(message) {
  // console.log(message);
});

//Message ID = 77 COMMAND_ACK listener
socket.on('COMMAND_ACK', function(message) {
  // console.log(message);
});

//Message ID = 80 ROLL_PITCH_YAW_RATES_THRUST_SETPOINT listener
socket.on('ROLL_PITCH_YAW_RATES_THRUST_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 81 MANUAL_SETPOINT listener
socket.on('MANUAL_SETPOINT', function(message) {
  // console.log(message);
});

//Message ID = 89 LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET listener
socket.on('LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET', function(message) {
  // console.log(message);
});

//Message ID = 90 HIL_STATE listener
socket.on('HIL_STATE', function(message) {
  // console.log(message);
});

//Message ID = 91 HIL_CONTROLS listener
socket.on('HIL_CONTROLS', function(message) {
  // console.log(message);
});

//Message ID = 92 HIL_RC_INPUTS_RAW listener
socket.on('HIL_RC_INPUTS_RAW', function(message) {
  // console.log(message);
});

//Message ID = 100 OPTICAL_FLOW listener
socket.on('OPTICAL_FLOW', function(message) {
  // console.log(message);
});

//Message ID = 101 GLOBAL_VISION_POSITION_ESTIMATE listener
socket.on('GLOBAL_VISION_POSITION_ESTIMATE', function(message) {
  // console.log(message);
});

//Message ID = 102 VISION_POSITION_ESTIMATE listener
socket.on('VISION_POSITION_ESTIMATE', function(message) {
  // console.log(message);
});

//Message ID = 103 VISION_SPEED_ESTIMATE listener
socket.on('VISION_SPEED_ESTIMATE', function(message) {
  // console.log(message);
});

//Message ID = 104 VISION_POSITION_ESTIMATE listener
socket.on('VISION_POSITION_ESTIMATE', function(message) {
  // console.log(message);
});

//Message ID = 105 HIGHRES_IMU listener
socket.on('HIGHRES_IMU', function(message) {
  // console.log(message);
});

//Message ID = 110 FILE_TRANSFER_START listener
socket.on('FILE_TRANSFER_START', function(message) {
  // console.log(message);
});

//Message ID = 111 FILE_TRANSFER_DIR_LIST listener
socket.on('FILE_TRANSFER_DIR_LIST', function(message) {
  // console.log(message);
});

//Message ID = 112 FILE_TRANSFER_RES listener
socket.on('FILE_TRANSFER_RES', function(message) {
  // console.log(message);
});

//Message ID = 113 HIL_GPS listener
socket.on('HIL_GPS', function(message) {
  // console.log(message);
});

//Message ID = 114 HIL_OPTICAL_FLOW listener
socket.on('HIL_OPTICAL_FLOW', function(message) {
  // console.log(message);
});

//Message ID = 115 HIL_STATE_QUATERNION listener
socket.on('HIL_STATE_QUATERNION', function(message) {
  // console.log(message);
});

//Message ID = 116 SCALED_IMU2 listener
socket.on('SCALED_IMU2', function(message) {
  // console.log(message);
});

//Message ID = 117 LOG_REQUEST_LIST listener
socket.on('LOG_REQUEST_LIST', function(message) {
  // console.log(message);
});

//Message ID = 118 LOG_ENTRY listener
socket.on('LOG_ENTRY', function(message) {
  // console.log(message);
});

//Message ID = 119 LOG_REQUEST_DATA listener
socket.on('LOG_REQUEST_DATA', function(message) {
  // console.log(message);
});

//Message ID = 120 LOG_DATA listener
socket.on('LOG_DATA', function(message) {
  // console.log(message);
});

//Message ID = 121 LOG_ERASE listener
socket.on('LOG_ERASE', function(message) {
  // console.log(message);
});

//Message ID = 122 LOG_REQUEST_END listener
socket.on('LOG_REQUEST_END', function(message) {
  // console.log(message);
});

//Message ID = 123 GPS_INJECT_DATA listener
socket.on('GPS_INJECT_DATA', function(message) {
  // console.log(message);
});

//Message ID = 124 GPS2_RAW listener
socket.on('GPS2_RAW', function(message) {
  // console.log(message);
});

//Message ID = 125 POWER_STATUS listener
socket.on('POWER_STATUS', function(message) {
  // console.log(message);
});

//Message ID = 126 SERIAL_CONTROL listener
socket.on('SERIAL_CONTROL', function(message) {
  // console.log(message);
});

//Message ID = 130 DATA_TRANSMISSION_HANDSHAKE listener
socket.on('DATA_TRANSMISSION_HANDSHAKE', function(message) {
  // console.log(message);
});

//Message ID = 131 ENCAPSULATED_DATA listener
socket.on('ENCAPSULATED_DATA', function(message) {
  // console.log(message);
});

//Message ID = 132 DISTANCE_SENSOR listener
socket.on('DISTANCE_SENSOR', function(message) {
  // console.log(message);
});

//Message ID = 147 BATTERY_STATUS listener
socket.on('BATTERY_STATUS', function(message) {
  // console.log(message);
});

//Message ID = 148 SETPOINT_8DOF listener
socket.on('SETPOINT_8DOF', function(message) {
  // console.log(message);
});

//Message ID = 149 SETPOINT_6DOF listener
socket.on('SETPOINT_6DOF', function(message) {
  // console.log(message);
});

//Message ID = 249 MEMORY_VECT listener
socket.on('MEMORY_VECT', function(message) {
  // console.log(message);
});

//Message ID = 250 DEBUG_VECT listener
socket.on('DEBUG_VECT', function(message) {
  // console.log(message);
});

//Message ID = 251 NAMED_VALUE_FLOAT listener
socket.on('NAMED_VALUE_FLOAT', function(message) {
  // console.log(message);
});

//Message ID = 252 NAMED_VALUE_INT listener
socket.on('NAMED_VALUE_INT', function(message) {
  // console.log(message);
});

//Message ID = 253 STATUSTEXT listener
socket.on('STATUSTEXT', function(message) {
  // console.log(message);
});

//Message ID = 254 DEBUG listener
socket.on('DEBUG', function(message) {
  // console.log(message);
});