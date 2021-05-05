<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    return [
      $this::$wrap => [
        'id' => $this->id,
        'created_at' => date('Y-m-d H:i:s', strtotime($this->created_at)),
        'updated_at' => date('Y-m-d H:i:s', strtotime($this->updated_at)),
        'name' => $this->name,
        'description' => $this->description,
        'avatar' => $this->avatar,
        'test2' => 'test',
        'dates' => $this->dates,
        'prices' => $this->prices,
        'venues' => $this->venues->load('addresses')->load('emails')->load('phones')->load('websites')->load('websites.socialNetwork'),
        'people' => $this->people,
        'addresses' => $this->addresses,
        'emails' => $this->emails,
        'phones' => $this->phones,
        'websites' => $this->websites->load('socialNetwork'),
        'files' => $this->files,
        'taxonomies' => $this->taxonomies,
        'comments' => $this->comments,
        // TODO show likes of the logged user.
        'likes_count' => $this->likes->where('is_dislike', 0)->count(),
        // TODO show dislikes of the logged user.
        'dislikes_count' => $this->likes->where('is_dislike', 1)->count(),
        // TODO show favorites only if the user is logged in.
        'favorites' => $this->favorites,
      ],
      'credit' => env('APP_CREDIT'),
      'website' => env('APP_URL'),
      'licence' => env('APP_LICENCE'),
      'timezone' => env('TIME_ZONE'),
    ];
  }

  /**
   * The "data" wrapper that should be applied.
   *
   * @var string
   */
  public static $wrap = 'event';
}