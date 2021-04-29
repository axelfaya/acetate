<?php

namespace App\Http\Traits;

trait RespondsWithHttpStatus
{
  /**
   * Return success message.
   *
   * @param  string $message
   * @param  array $data
   * @param  int $status
   * @return Respone
   */
  protected function success($message, $data = [], $status = 200)
  {
    return response([
      'success' => true,
      'data' => $data,
      'message' => $message,
    ], $status);
  }

  /**
   * Return error message.
   *
   * @param  string $message
   * @param  int $status
   * @return Response
   */
  protected function failure($message, $status = 422)
  {
    return response([
      'success' => false,
      'message' => $message,
    ], $status);
  }
}